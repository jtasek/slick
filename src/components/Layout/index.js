import React, {Component} from 'react'
import { connect } from '@cerebral/react'
import { state } from 'cerebral/tags'
import styles from './styles.css'
import Footer from '../Footer'
import Header from '../Header'
import NavBar from '../NavBar'
import NotificationList from '../NotificationList'
import SideBar from '../SideBar'
import Workspace from '../Workspace'
import Dialogs from '../Dialogs'
import { DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom';

// Drag sources and drop targets only interact
// if they have the same string type.
// You want to keep types in a separate file with
// the rest of your app's constants.
const Types = {
    DIALOG: 'dialog'
};

/**
* Specifies the drop target contract.
* All methods are optional.
*/
const dialogTarget = {
    canDrop(props, monitor) {
        // You can disallow drop based on props or item
        const item = monitor.getItem();
        return true;//canMakeChessMove(item.fromPosition, props.position);
    },

    hover(props, monitor, component) {
        // This is fired very often and lets you perform side effects
        // in response to the hover. You can't handle enter and leave
        // here—if you need them, put monitor.isOver() into collect() so you
        // can just use componentWillReceiveProps() to handle enter/leave.

        // You can access the coordinates if you need them
        const clientOffset = monitor.getClientOffset();
        const componentRect = findDOMNode(component).getBoundingClientRect();

        // You can check whether we're over a nested drop target
        const isJustOverThisOne = monitor.isOver({ shallow: true });

        // You will receive hover() even for items for which canDrop() is false
        const canDrop = monitor.canDrop();
    },

    drop(props, monitor, component) {
        if (monitor.didDrop()) {
            // If you want, you can check whether some nested
            // target already handled drop
            return;
        }

        // Obtain the dragged item
        const item = monitor.getItem();

        // You can do something with it
        console.log('Move dialog')
        //ChessActions.movePiece(item.fromPosition, props.position);

        // You can also do nothing and return a drop result,
        // which will be available as monitor.getDropResult()
        // in the drag source's endDrag() method
        return { moved: true };
    }
};

/**
 * Specifies which props to inject into your component.
 */
function collect(connect, monitor) {
    return {
        // Call this function inside render()
        // to let React DnD handle the drag events:
        connectDropTarget: connect.dropTarget(),
        // You can ask the monitor about the current drag state:
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
        canDrop: monitor.canDrop(),
        itemType: monitor.getItemType()
    };
}

@DropTarget(Types.DIALOG, dialogTarget, collect)
class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // Your component receives its own props as usual
        //const { position } = this.props;

        // These props are injected by React DnD,
        // as defined by your `collect` function above:
        const { isOver, canDrop, connectDropTarget } = this.props;

        return connectDropTarget(
            <div className={styles.layout}>
                <Header />
                <NotificationList />
                <Dialogs />
                <div className={styles.main}>
                    {/* <NavBar /> */}
                    {/*<SideBar />*/}
                    {/*<Workspace />*/}
                    {this.props.children}
                    {/*<SideBar />*/}
                </div>
                <Footer />
            </div>)
    }
}

export default connect(
    {
        layout: state`ui.layout`
    },
    Layout
)

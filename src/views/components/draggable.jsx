import React, { Component } from 'react';
import { Card } from 'antd'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import './index.scss'

class index extends Component {
  state = {
    items: [
      {
        id: 'item-0',
        avator: require("@/assets/img/jake.png").default,
        content: 'Sucking at something is the first step towards being sorta good at something.'
      },
      {
        id: 'item-1',
        avator: require("@/assets/img/jake.png").default,
        content: `That's it! The answer was so simple, I was too smart to see it!`
      },
      {
        id: 'item-3',
        avator: require("@/assets/img/jake.png").default,
        content: `Don't you always call sweatpants 'give up on life pants,' Jake?`
      },
      {
        id: 'item-4',
        avator: require("@/assets/img/jake.png").default,
        content: `You got to focus on what's real, man`
      },
    ]
  }

  reOrder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
        return;
    }

    const items = this.reOrder(
        this.state.items,
        result.source.index,
        result.destination.index
    );

    this.setState({
        items
    });
  }
  render() {
    return (
      <div>
        <Card title="简介" className="marginBottom">
          拖拽使用插件<a href="https://github.com/atlassian/react-beautiful-dnd">react-beautiful-dnd</a>。
        </Card> 
        <Card>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable droppableId="droppable">
              {
                (provided, snapshot) => (
                  <div ref={provided.innerRef}
                    className="drag-content"
                    {...provided.droppableProps}
                  >
                    <h4>Demo</h4>
                    {this.state.items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="draggable"
                                >
                                  <img className="avator" src={item.avator} alt=""/>
                                  <div className="content">{item.content}</div>
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )
              }
            </Droppable>
          </DragDropContext>
        </Card>
      </div>
    );
  }
}

export default index;

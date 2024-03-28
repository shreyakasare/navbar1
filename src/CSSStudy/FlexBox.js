import React from "react";
import "./FlexBox.css";
import img from "../Assets/down-arrow.png";

const FlexBox = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="collapsible">
          <input type="checkbox" id="collapsible-head" />
          <label for="collapsible-head">
            Collapsible
            <img className="image" src={img} alt="Arrow"></img>
          </label>
          <div className="collapsible-text">
            <h5>Collapsible Heading</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>

      <div className="wrapperabs">
        <div className="collapsibleabs">
          <input type="checkbox" id="collapsibleabs-head" />
          <label for="collapsibleabs-head">
            Collapsible
            <img className="image" src={img} alt="Arrow"></img>
          </label>
          <div className="collapsibleabs-text">
            <h5>Absolute</h5>
            <div className="absunit">
              <p>Absolute Units?</p>
              <p>
                Absolute units specify a fixed length value. It doesn't matter
                if the screen's width or height changes, the value will remain
                fixed.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='cflex'> */}
      {/* <p>column-reverse</p> */}
      {/* <div className='containerfb'>
                    <div className="flex-item item-7">Item 7</div>
                    <div className="flex-item item-8">Item 8</div>
                    <div className="flex-item item-9">Item 9</div>
                </div> */}

      {/* <p>column-reverse</p> */}

      {/* <div className='containerfb1'>
                    <div className="flex-item item-1">Item 1</div>
                    <div className="flex-item item-2">Item 2</div>
                    <div className="flex-item item-3">Item 3</div>
                    <div className="flex-item item-4">Item 4</div>
                </div> */}

      {/* <div className='containerfb2'>
                    <div className="flex-item item-1">Item 1</div>
                    <div className="flex-item item-2">Item 2</div>
                    <div className="flex-item item-3">Item 3</div>
                    <div className="flex-item item-4">Item 4</div>
                </div> */}

      {/* <div className='containerfb3'>
                    <div className="flex-item item-1">Item 1</div>
                    <div className="flex-item item-2">Item 2</div>
                    <div className="flex-item item-3">Item 3</div>
                    <div className="flex-item item-4">Item 4</div>
                </div> */}
      {/* 
                <div className='containerfb4'>
                    <div className="flex-item item-1">Item 1</div>
                    <div className="flex-item item-2">Item 2</div>
                    <div className="flex-item item-3">Item 3</div>
                    <div className="flex-item item-4">Item 4</div>
                </div>

                <div className='containerfb5'>
                    <div className="flex-item item-1">Item 1</div>
                    <div className="flex-item item-2">Item 2</div>
                    <div className="flex-item item-3">Item 3</div>
                    <div className="flex-item item-4">Item 4</div>
                </div> */}

      {/* <div className='containerfb6'>
                    <div className="flex-item item-1">Item 1</div>
                    <div className="flex-item item-2">Item 2</div>
                    <div className="flex-item item-3">Item 3</div>
                    <div className="flex-item item-4">Item 4</div>
                </div>

                <div className='containerfb7'>
                    <div className="flex-item item-1">Item 1</div>
                    <div className="flex-item item-2">Item 2</div>
                    <div className="flex-item item-3">Item 3</div>
                    <div className="flex-item item-4">Item 4</div>
                </div>

                <div className='containerfb8'>
                    <div className="flex-item item-1">Item 1</div>
                    <div className="flex-item item-2">Item 2</div>
                    <div className="flex-item item-3">Item 3</div>
                    <div className="flex-item item-4">Item 4</div>
                </div> */}
      {/* </div> */}
    </div>
  );
};

export default FlexBox;

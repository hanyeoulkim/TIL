import React from 'react'

export default function Card(props) {
  return (
    <div className="ui card" style={{backgroundColor: 'DimGrey', color: 'white'}}>
        <div className="content">
            {props.children}
        </div>
        <div className="extra content">
            <div className="ui two buttons">
                <div className="ui purple button">참여하기</div>
            </div>
        </div>
    </div>
  )
}
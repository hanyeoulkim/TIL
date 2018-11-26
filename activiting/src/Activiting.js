import React from "react";
import "./Activiting.css";

export default function Activiting() {
  return (
    <article className="body-full-overlay">
      <div className="main-body">
        <div className="col-sm-8 jumbotron">
            <h3> Activit'ing 모임 현황</h3>
            <h5> 오늘의 모임 수 : 170개 </h5>
        </div>
        <div className="col-sm-4">여기에 구독료</div>
      </div>
    </article>
  );
}

import React from "react";
import "./card-list.css";
import {Card} from "../card/card";


export const CardList = (props)=><div className="card-list">
        {
                props.monsters.map((e, i) =>
                    <Card key={e.id} monster={e}/>
                )
        }
        </div>
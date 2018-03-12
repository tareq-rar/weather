/**
 *
 * Created by tareq on 24/11/17.
 */
import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesSpots, SparklinesBars, SparklinesReferenceLine} from 'react-sparklines';

function average(data){
    return _.round(_.sum(data)/data.length);
}

export default (props) => {
    return(
        <div>
            <Sparklines height={100} width={180} data={props.data}>
                <SparklinesLine color = {props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    );
}
//x x y y
//x x
//x y
//y y
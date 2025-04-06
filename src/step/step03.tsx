import React from 'react'

const Step03 = () => {
    /*
        [ type ]
        타입을 변수에 담아 사용하는 방법
    */
    type Status = 'active' | "inactive";
    const status : Status  = "active";

    /*
        [ Intersection Type ]
        여러 타입을 합쳐 새로운 타입을 만드는 방법
    */
    type PositionX = {x:number};
    type PositionY = {y:number};
    type XandY = PositionX & PositionY;
    const shape : XandY = {x:1, y:2};

    /*
        [ interface ]
        Object 자료형의 타입을 보다 편리하게 지정가능
        type과의 차이점 : extends 사용 가능
    */
    interface Person {
        name : string;
    }

    interface Student extends Person {
        school : string;
        age?: number;
    }

    const st : Student = {
        name : '짱구',
        school : '팡팡',
        // age : 5
    }

    return (
        <div>Step03</div>
    )
}

export default Step03
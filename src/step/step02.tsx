import React from 'react'

const Step02 = () => {
    /*
        [ Union Type ]
        여러 타입 중 하나를 가질 수 있는 변수를 정의할 때 사용
    */
    let nameOrAge : string | number;
    nameOrAge = '짱구';

    const arr : (number | string)[] = [ 1, '2', 3 ];
    const obj : { data : string | number } = { data : 123 };

    /*
        [ Literal Type ]
        특정 값만 가질 수 있는 변수를 정의할 때 사용
    */
    const direction : "left" | "right" = "left";

    /*
        [ Any Type ]
        아무 자료나 집어넣을 수 있는 타입
    */
    let age : any = '짱구';
    age = 11;

    /*
        [ Unknown Type ]
        any와 비슷하지만 조금 더 엄격한 타입
        타입을 모를 때 사용하며, 사용 전 타입체크가 필요
    */
    let age2 : unknown = '짱구';
    age2 = 5;

    if(typeof age2 === "number"){ // Type Narrowing
        age2 = age2 + 3
    }

    /*
        [ Type Assertion ]
        타입을 확실하게 지정할 때 사용 
    */

    const val : unknown = "HELLO!";
    const strLength : number = (val as string).length;

    /*
        [ Type Narrowing ]
        타입을 좁혀가는 것
    */

    function printAge(age : number | string ){
        if(typeof age === 'number'){
            console.log(age);
        }
    }
    printAge('11')


    return (
        <div>Step02</div>
    )
}

export default Step02
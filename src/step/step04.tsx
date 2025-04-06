import React from 'react'

const Step04 = () => {
    /*
        [ 제네릭 ]
        - 타입을 매개변수로 받아 사용하는 방법
        - 제네릭을 사용하면 코드의 재사용성을 높이고 
        다양한 타입에 대해 유연하게 동작하는 코드를 작성가능
    */
    function identity<T>(value:T) : T {
        return value;
    }

    const numVal = identity<number>(10);
    const strVal = identity<string>("Hello");

    function getLength<T>(arr : T[]) : number{
        return arr.length;
    }

    const length = getLength<string>(['a','b','c']);
    const length2 = getLength<number>([1, 2, 3]);


    return (
        <div>Step04</div>
    )
}

export default Step04
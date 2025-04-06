import React from 'react'

const Step01 = () => {
    let stname : string = "짱구";
    let age : number = 5;
    let isStudent : boolean = true;
    let emptyVal : null = null;
    let notAss : undefined = undefined;

    /** Array : **이 2개 들어간 주석 */
    const numbers : number[] = [1,2,3]; // 방법1
    const friends : Array<string> = ['짱구', '철수']; // 방법2

    /** Object */
    const person : { name : string, age : number} = {
        name : '짱구',
        age : 5
    }

    /**
     * Function 에서는 이렇게 작동
     * @param name 여기에는 꼭 이름을 넣어주세요.
     * @returns 인사말 출력
    */
    function greet(name : string) : string {
        console.log(name);
        return `안녕 ${name}`;
    }

    greet('짱구');
    // greet(123); // 오류발생

    /*
        [ 함수 타입 지정 ]

        - return이 없어야 한다면 void
        function func(x:number) : void {}

        - 파라미터가 옵션일 경우
        function func(x? : number) {}

        - return할 자료 타입
        function func(x:number) : number {
            return x*2;
        }

        - Union type 가능
        function func(x:number | string) {}
    
    */

    return (
        <div>{numbers}</div>
    )
}

export default Step01
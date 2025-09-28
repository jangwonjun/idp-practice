import React from "react";

function Hello({name, color, isSpecial}){
    const dept = '정보융합학부';
    
    return( 
    <>
    <div>안녕하세요 {prop.name} : {name}님
        {prop.color} 색깔을 줄게요.
        <br />
        {isSpecial ? <b>반갑습니다</b> : null}
        반갑습니다.
        <div style={{color:prop.color}}>하이</div>
    </div>; /** JSX 형식이다!(Babel) */
    </>
    )
}



Hello.defaultProps = {
    name : '이름없음',
}
export default Hello;
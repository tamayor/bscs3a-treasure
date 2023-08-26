import React from "react";
import Plus10List from "./Plus10List";
import './AllDesign.css'
function Plus10( { showPlus10 , onShowPlus10 } ){
    const [sort, setSort] = React.useState('');
    
    let renderedInfo;
    switch(sort){
        case "male":
            renderedInfo = Plus10List.filter(item => item.sex === sort).map((item, index)=>{
                return(
                    <li key={index} className={item.willJoin ? "list-join" : "list-wont-join"}>
                        <span>{item.name}</span><span>{item.willJoin ? " will join" : " will not join"}</span>
                    </li>
                )
            });
            break;
        case "female":
        renderedInfo = Plus10List.filter(item => item.sex === sort).map((item, index)=>{
            return(
                <li key={index} className={item.willJoin ? "list-join" : "list-wont-join"}>
                    <span>{item.name}</span><span>{item.willJoin ? " will join" : " will not join"}</span>
                </li>
            )
        });
        break;
        case "will join":
        renderedInfo = Plus10List.filter(item => item.willJoin).map((item, index)=>{
            return(
                <li key={index}>
                    <span>{item.name}</span>
                </li>
            )
        });
        break;
        case "will not join":
        renderedInfo = Plus10List.filter(item => !item.willJoin).map((item, index)=>{
            return(
                <li key={index}>
                    <span>{item.name}</span>
                </li>
            )
        });
        break;
        case "paid":
        renderedInfo = Plus10List.filter(item => item.willJoin).map((item, index)=>{
            return(
                <div key={index} className="li">
                    {item.paid > 0 && 
                    <div className="name-paid"><div>
                        <label className="list-number">{index+1}.  </label><span>{item.name}</span></div><span>{item.paid}</span>
                    </div>}
                </div>
            )
        });
        break;
        case "not paid":
        renderedInfo = Plus10List.filter(item => item.willJoin).map((item, index)=>{
            return(
                 (item.paid === 0 && item.willJoin) && (<li><span>{item.name}</span></li>)
            )
        });
        break;
        default : 
        renderedInfo = Plus10List.map((item,index) => {
            return(
                <li key={index} className={item.willJoin ? "list-join" : "list-wont-join"}>
                    <span>{item.name}</span><span>{item.willJoin ? " will join" : " won't join"}</span>
                </li>
            )
        })
    }
    let listBg;
    switch(sort){
        case "male" :
            listBg = "list bg-blue"
        break;
        case "female" :
            listBg = "list bg-pink"
        break;
        case "will join" :
            listBg = "list bg-green"
        break;
        case "will not join" :
            listBg = "list bg-red"
        break;
        case "paid" :
            listBg = "list bg-green"
        break;
        case "not paid" :
            listBg = "list bg-red"
        break;
        default:
            listBg = "list bg"
    }
    let totalMoney = 0;

    for(let i=0 ; i<Plus10List.length ; i++){
        totalMoney += Plus10List[i].paid;
    }
        
    
    return(
        <section className="Plus10">
            {showPlus10 && (
                <div>
                    
                        <div className="event-info">
                            <span><strong>WHO</strong> BSCS 3-A</span><br/>
                            <span><strong>WHAT</strong> ICT 122 - Church Anniversary </span><br/>
                            <span><strong>WHEN</strong> Sunday, August 27, 2023, 7:30AM </span><br/>
                            <span><strong>WHERE</strong> Bible Baptist Church, Miag-ao, Iloilo </span><br/>
                            <span><strong>MEET-UP</strong> Mohon Terminal </span><br/>
                            <span><strong>DRESS CODE</strong> Sunday's Best or Formal </span>
                        </div>
        
                    <div className="buttons">
                    <button className="button bg" onClick={() => onShowPlus10(false)}>Close</button>
                    <button className="button bg" onClick={() => onShowPlus10("event info")}>Event Info</button>
                    <button className="button bg-green" onClick={()=>setSort("will join")}>will join</button>
                    <button className="button bg-red" onClick={()=>setSort("will not join")}>won't join</button>
                    <button className="button bg-green" onClick={()=>setSort("paid")}>paid</button>
                    <button className="button bg-red" onClick={()=>setSort("not paid")}>not paid</button>
                    <button className="button bg"  onClick={()=>setSort("")}>Class List</button>
                    <button className="button bg-blue" onClick={()=>setSort("male")}>Boys</button> 
                    <button className="button bg-pink" onClick={()=>setSort("female")}>Girls</button>
                    </div>
                    <div className={listBg}>
                        {sort==='paid' && <div className="total-amount"><span>Total amount : </span><h3>₱{totalMoney}</h3></div>}
                        {renderedInfo}
                    </div>
                </div>
            )}
        </section>
    )
}
export default Plus10;
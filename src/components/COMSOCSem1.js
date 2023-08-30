import React from "react";
import COMSOCSem1list from "./COMSOCSem1list";
import './AllDesign.css';

function Plus10( { showCOMSOCSem1 , onShowCOMSOCSem1 } ){
    const [sort, setSort] = React.useState('');
    
    let renderedInfo;
    switch(sort){
        case "male":
            renderedInfo = COMSOCSem1list.filter(item => item.sex === sort).map((item, index)=>{
                return(
                    <li key={index} className={item.paid ? "list-join" : "list-wont-join"}>
                        <span>{item.name}</span><span>{item.paid ? " has paid" : " hasn't paid"}</span>
                    </li>
                )
            });
            break;
        case "female":
        renderedInfo = COMSOCSem1list.filter(item => item.sex === sort).map((item, index)=>{
            return(
                <li key={index} className={item.paid ? "list-join" : "list-wont-join"}>
                    <span>{item.name}</span><span>{item.paid ? " has paid" : " hasn't paid"}</span>
                </li>
            )
        });
        break;
        case "paid":
        renderedInfo = COMSOCSem1list.filter(item => item.paid).map((item, index)=>{
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
        renderedInfo = COMSOCSem1list.filter(item => item.name).map((item, index)=>{
            return(
                <div key={index} className="li">
                    {item.paid === 0 && 
                    <div className="name-paid"><div>
                        <label className="list-number">{index+1}.  </label><span>{item.name}</span></div><span>{item.paid}</span>
                    </div>}
                </div>
            )
        });
        break;
        default : 
        renderedInfo = COMSOCSem1list.map((item,index) => {
            return(
                <li key={index} className={item.willJoin ? "list-join" : "list-wont-join"}>
                    <span>{item.name}</span><span>{item.willJoin ? " has paid" : " hasn't paid"}</span>
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

    for(let i=0 ; i<COMSOCSem1list.length ; i++){
        totalMoney += COMSOCSem1list[i].paid;
    }
        
    
    return(
        <section className="Plus10">
            {showCOMSOCSem1 && (
                <div>       
                    
                    <div className="event-info">
                        <span><strong>WHAT</strong>COMSOC First Semester Membership Fee</span><br/>
                        <span><strong>PAY</strong>Divine Joy Ermoso || Elly Mar Tamayor</span><br/>
                        <span><strong>AMOUNT</strong>30 pesos</span><br/>
                        <span><strong>DEADLINE</strong>August 30, 2023</span><br/>
                    </div>
                    <div className="buttons">
                    <button className="button bg" onClick={() => onShowCOMSOCSem1(false)}>Close</button>
                    <button className="button bg-green" onClick={()=>setSort("paid")}>paid</button>
                    <button className="button bg-red" onClick={()=>setSort("not paid")}>not paid</button>
                    <button className="button bg" onClick={()=>setSort("")}>Class List</button>
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
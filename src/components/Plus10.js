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
                    <li key={index}>
                        <span>{item.name}</span>
                    </li>
                )
            });
            break;
        case "female":
        renderedInfo = Plus10List.filter(item => item.sex === sort).map((item, index)=>{
            return(
                <li key={index}>
                    <span>{item.name}</span>
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
                <li key={index}>
                    {item.paid > 0 && <span>{item.name} paid {item.paid}</span>}
                </li>
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
        renderedInfo = Plus10List.map((list,index) => {
            return(
                <li key={index}>
                    <span>{list.name}</span> 
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
    return(
        <section className="Plus10">
            {showPlus10 && (
                <div>
                    <div className="buttons">
                    <button className="button bg" onClick={() => onShowPlus10(false)}>Close</button>
                    <button className="button bg"  onClick={()=>setSort("")}>List</button>
                    <button className="button bg-blue" onClick={()=>setSort("male")}>Boys</button> 
                    <button className="button bg-pink" onClick={()=>setSort("female")}>Girls</button>
                    <button className="button bg-green" onClick={()=>setSort("will join")}>will join</button>
                    <button className="button bg-red" onClick={()=>setSort("will not join")}>won't join</button>
                    <button className="button bg-green" onClick={()=>setSort("paid")}>paid</button>
                    <button className="button bg-red" onClick={()=>setSort("not paid")}>not paid</button>
                    </div>
                    <div className={listBg}>
                        {renderedInfo}
                    </div>
                </div>
            )}
        </section>
    )
}
export default Plus10;
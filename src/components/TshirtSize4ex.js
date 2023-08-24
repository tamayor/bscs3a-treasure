import React from "react";
import TshirtSize4exList from "./TshirtSize4exList";
import './AllDesign.css'
function TshirtSize4ex( { showTshirtSize , onShowTshirtSize } ){
    const [sort, setSort] = React.useState('');
    
    let renderedInfo;
    switch(sort){
        case "male":
            renderedInfo = TshirtSize4exList.filter(item => item.sex === sort).map((item, index)=>{
                return(
                    <li key={index} className={item.willBuy ? "list-join" : "list-wont-join"}>
                        <span>{item.name}</span><span>{item.willBuy ? " will buy a Tshirt size " : " will not buy a Tshirt"} {item.willBuy ? item.tshirtsize : ""}</span>
                    </li>
                )
            });
            break;
        case "female":
        renderedInfo = TshirtSize4exList.filter(item => item.sex === sort).map((item, index)=>{
            return(
                <li key={index} className={item.willBuy ? "list-join" : "list-wont-join"}>
                    <span>{item.name}</span><span>{item.willBuy ? " will buy a Tshirt size " : " will not buy a Tshirt"} {item.willBuy ? item.tshirtsize : ""}</span>
                </li>
            )
        });
        break;
        case "will buy":
        renderedInfo = TshirtSize4exList.filter(item => item.willBuy).map((item, index)=>{
            return(
                <li key={index}>
                    <span>{item.name}</span>
                </li>
            )
        });
        break;
        case "will not buy":
        renderedInfo = TshirtSize4exList.filter(item => !item.willBuy).map((item, index)=>{
            return(
                <li key={index}>
                    <span>{item.name}</span>
                </li>
            )
        });
        break;
        case "paid":
        renderedInfo = TshirtSize4exList.filter(item => item.paid).map((item, index)=>{
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
        renderedInfo = TshirtSize4exList.filter(item => item.willBuy).map((item, index)=>{
            return(
                 (item.paid === 0 && item.willBuy) && (<li><span>{item.name}</span></li>)
            )
        });
        break;
        case "XL":
        renderedInfo = TshirtSize4exList.filter(item => item.tshirtsize).map((item, index)=>{
            return(
                 (item.tshirtsize === 'XL' && item.willBuy) && (<li><span>{item.name}</span></li>)
            )
        });
        break;
        case "L":
        renderedInfo = TshirtSize4exList.filter(item => item.tshirtsize).map((item, index)=>{
            return(
                 (item.tshirtsize === 'L' && item.willBuy) && (<li><span>{item.name}</span></li>)
            )
        });
        break;
        case "M":
        renderedInfo = TshirtSize4exList.filter(item => item.tshirtsize).map((item, index)=>{
            return(
                 (item.tshirtsize === 'M' && item.willBuy) && (<li><span>{item.name}</span></li>)
            )
        });
        break;
        case "S":
        renderedInfo = TshirtSize4exList.filter(item => item.tshirtsize).map((item, index)=>{
            return(
                 (item.tshirtsize === 'S' && item.willBuy) && (<li><span>{item.name}</span></li>)
            )
        });
        break;
        case "XS":
        renderedInfo = TshirtSize4exList.filter(item => item.tshirtsize).map((item, index)=>{
            return(
                 (item.tshirtsize === 'XS' && item.willBuy) && (<li><span>{item.name}</span></li>)
            )
        });
        break;
        default : 
        renderedInfo = TshirtSize4exList.map((item,index) => {
            return(
                <li key={index} className={item.willBuy ? "list-join" : "list-wont-join"}>
                  <span>{item.name}</span><span>{item.willBuy ? " will buy a Tshirt size " : " will not buy a Tshirt"} {item.willBuy ? item.tshirtsize : ""}</span>
                </li>
            )
        })
    }
    let listBg;
    switch(sort){
        case "male" :
            listBg = "list-with-size bg-blue"
        break;
        case "female" :
            listBg = "list-with-size bg-pink"
        break;
        case "will buy" :
            listBg = "list-with-size bg-green"
        break;
        case "will not buy" :
            listBg = "list-with-size bg-red"
        break;
        case "paid" :
            listBg = "list-with-size bg-green"
        break;
        case "not paid" :
            listBg = "list-with-size bg-red"
        break;
        default:
            listBg = "list-with-size bg"
    } 
    let totalMoney = 0;

    for(let i=0 ; i<TshirtSize4exList.length ; i++){
        totalMoney += TshirtSize4exList[i].paid;
    }
    return(
        <section className="showTshirtSize">
            {showTshirtSize && (
                <div>
                    <div className="buttons">
                    <button className="button bg" onClick={() => onShowTshirtSize(false)}>Close</button>
                    <button className="button bg-green" onClick={()=>setSort("will buy")}>will buy</button>
                    <button className="button bg-red" onClick={()=>setSort("will not buy")}>won't buy</button>
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
                    <div className="buttons-sizes">
                        <button className="button-size bg" onClick={()=>setSort("XL")}>XL</button>
                        <button className="button-size bg" onClick={()=>setSort("L")}>L</button>
                        <button className="button-size bg" onClick={()=>setSort("M")}>M</button>
                        <button className="button-size bg" onClick={()=>setSort("S")}>S</button>
                        <button className="button-size bg" onClick={()=>setSort("XS")}>XS</button>
                    </div>
                </div>
            )}
        </section>
    )
}
export default TshirtSize4ex;
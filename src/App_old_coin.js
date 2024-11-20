
import {useState, useEffect } from 'react';

// API 가져오기 실습
// 1. 로딩중 Or not 설정
// 2. API는 단 한번만 불러옴 = useEffect 사용
// 3. fetch를 통해 API 정보를 가져옴 = https://api.coinpaprika.com/v1/tickers
// 4. selectbox나 li를 통해 뿌려줌
// 5. 현재 내가 가지고 있는 달러를 입력하고 4번의 리스트 중 하나를 택하면 얼마 살 수 있는지 BTC로 알려줌 


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json)
        setLoading(false);
      })
  }, [])


  // 달러 -> 비트코인 환산
  const [dollar, setDollar] = useState("");
  const dollarOnChange = (event) => {
    setDollar(event.target.value)
  }

  const BTC = loading ? null : Math.round(coins[0].quotes.USD.price * 1000) / 1000;


  // 셀렉박스
  const [option, setOption] = useState("");
  const optionOnChange = (event) => {
    setOption(event.target.value);
  }

  return (
    <div>
      <h1>비트코인 리스트</h1>

      <p>1. 코인을 선택하세요.</p>
      {loading ? ("Loading...") : (
        <select value={option} onChange={optionOnChange}>
          {coins.map(item => <option 
            key={item.id}>{item.name} - ${Math.round(item.quotes.USD.price * 1000) / 1000}</option>)}
        </select>
      )}

      <p>2. 가지고 있는 달러를 입력하세요.</p>
      <input 
        value={dollar}
        onChange={dollarOnChange}
        type="number"
        placeholder="달러 입력"
      /> USD
      <span> --&gt; 비트코인으로 환산 --&gt; </span>
      <input 
        value={Math.round(dollar / BTC * 1000000) / 1000000}
        readOnly
      /> BTC

      <p>
        3. 당신은 {dollar}달러로 &nbsp;
        <strong>{option.split(" - ")[0]}</strong>코인을 &nbsp;
        <strong>{dollar / Number(option.split("$")[1]) * Math.round(dollar / BTC * 1000000) / 1000000} BTC</strong>로
        구매할 수 있습니다.
      </p>
    </div>
  );
}

export default App;

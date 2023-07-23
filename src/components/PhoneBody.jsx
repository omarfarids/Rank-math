import React , {useState} from 'react'
import Container from './Container'
import {BsCurrencyBitcoin} from 'react-icons/bs'
import {FaDollarSign} from 'react-icons/fa'
import {SlArrowDown} from 'react-icons/sl'
import {AreaChart, Area } from 'recharts'
import { ToggleDropdown } from './Dropdowns'
import { dataDaily , dataWeekly , dataMonthly , dataYearly} from '../data/data'



const PhoneBody = () => {
  const [showToggleDropdown, setShowToggleDropdown] = useState(false)
  const [ dataFilter , setDataFilter ] = useState('week')
  const [graphsData , setGraphsData] = useState(dataWeekly)

  return (
    <div className='phone-body'>
        <Container  className={'phone-body_section'} coHeight={ showToggleDropdown ? '1076px' : '700px'} coWidth={ '1269px' }>
            <div className='body_section-bitcoin'>
                <div className='body_section-bitcoin'>

                    <div className='icon centered orange-icon'>
                        <BsCurrencyBitcoin />
                    </div>
                    <span className='bitcoin-title'>Bitcoin</span>
                </div>
                <p className='bitcoin-short-title'>BTC</p>
            </div>
            <p className='body_section-btc-total'>
                3.529020 BTC
            </p>
            <div className='body_section-usd-total'>
                <p className='usd-total'>$19.153 USD</p>
                <div className='usd-percentage centered'>- 2.32%</div>
            </div>
            <button onClick={()=>setShowToggleDropdown(!showToggleDropdown)} className={`body_section-dropdown ${showToggleDropdown ? 'close' : ''}`}><SlArrowDown /></button>

            <ToggleDropdown />
        </Container>
        
        <div className='body_time-toggle'>
            <button onClick={()=>{setDataFilter('day')
            setGraphsData(dataDaily)
          }} className={`time-toggle ${dataFilter === 'day' ? 'active' : ''}`}>Day</button>
            <button  onClick={()=>{setDataFilter('week')
            setGraphsData(dataWeekly)
          }} className={`time-toggle ${dataFilter === 'week' ? 'active' : ''}`}>Week</button>
            <button  onClick={()=>{setDataFilter('month')
            setGraphsData(dataMonthly)
          }} className={`time-toggle ${dataFilter === 'month' ? 'active' : ''}`}>Month</button>
            <button  onClick={()=>{setDataFilter('year')
            setGraphsData(dataYearly)
          }} className={`time-toggle ${dataFilter === 'year' ? 'active' : ''}`}>Year</button>
        </div>

        <Container  className={'phone-body_section section-charts flex-column'} coHeight={'700px'} coWidth={'1269px'}>
            <div className='charts-label flex-row'>
                <p className='label'><div className='dot red'></div> Lower:${Math.min(...graphsData.map(item=>{
                  return item['pv']
                }))}</p>
                <p className='label'><div className='dot green'></div> Higher:$6.857</p>
            </div>
        <AreaChart width={1100} height={500} data={graphsData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f99d21" stopOpacity={0.5}/>
                <stop offset="95%" stopColor="#f99d21" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f99d21" stopOpacity={0.5}/>
                <stop offset="95%" stopColor="#f99d21" stopOpacity={0.1}/>
                </linearGradient>
            </defs>
            <Area type="monotone" dataKey="pv" strokeWidth={8} stroke="#f99d21" fillOpacity={5} fill="url(#colorPv)" />
        </AreaChart>
        </Container>

        <div className='phone-body_supsection'>
            <Container className={'supsection-card centered'} coHeight={'421px'} coWidth={'590px'}>
                <div>
                    <div className='icon centered blue-icon'>
                        <FaDollarSign />
                    </div>
                    <p className='transaction-type'>Buy BTC</p>
                </div>
            </Container>
            <Container className={'supsection-card centered'}  coHeight={'421px'} coWidth={'590px'}>
                <div>
                    <div className='icon centered red-icon'>
                        <FaDollarSign />
                    </div>
                    <p className='transaction-type'>Sell BTC</p>
                </div>
            </Container>

        </div>
    </div>
  )
}

export default PhoneBody
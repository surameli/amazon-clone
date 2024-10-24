import React from 'react'
import numeral from 'numeral'
const CurrencyFormat = ({amount}) => {
    const formattedAmpount =numeral(amount).format("$0,0.00")
  return <div>{formattedAmpount}</div>
  
}

export default CurrencyFormat
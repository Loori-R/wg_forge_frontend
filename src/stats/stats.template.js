const tfoot = (obj) =>
    `<tfoot>
    <tr><th colspan='7' id='stats'>Statistic</th></tr>
<tr>
    <td>Orders Count</td> 
    ${obj.orders_count}
</tr>
<tr>
    <td>Orders Total</td>  
    ${obj.orders_total} 
</tr>
<tr>
    <td>Median Value</td> 
    ${obj.median_value}   
</tr>
<tr>
    <td>Average Check</td>
    ${obj.average_check}
</tr>
<tr>
    <td>Average Check (Female)</td>
    ${obj.average_female}
</tr>
<tr>
    <td>Average Check (Male)</td>
    ${obj.average_male}
</tr>
</tfoot>`

export default tfoot
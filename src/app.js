import './index.css'
import _ from 'lodash'
import ready from './table/table'

export default (function () {
    document.getElementById("app").innerHTML = ready;
}());
import sorter from '../../sorter/sorter';
import stats from '../../stats/stats'
import name_event from '../../users/event';
import search from '../../search/search'
import currency from '../../currency/currency'

const events = () => {
    sorter(name_event)
    stats()
    search(stats)
    currency(stats)
    name_event()
}
export default events
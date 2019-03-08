import sorter from '../../sorter/sorter';
import stats from '../stats/stats'
import name_event from '../../users/event';

const events = () => {
    sorter(name_event)
    name_event()
    stats()
}
export default events
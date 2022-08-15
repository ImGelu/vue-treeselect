import TreeSelect from './components/TreeSelect'
import TreeSelectMixin from './mixins/TreeSelectMixin'
import './styles/style.less'

export default TreeSelect
export { TreeSelect, TreeSelectMixin }
export {
  // Delayed loading.
  LOAD_ROOT_OPTIONS,
  LOAD_CHILDREN_OPTIONS,
  ASYNC_SEARCH,
} from './constants'

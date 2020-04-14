/**
 * Created by ayou on 17/7/21.
 * modified by Lwtsde on 14/04/20
 */

import VueTreeList from './VueTreeList'
import { Tree, TreeNode } from './Tree'

VueTreeList.install = Vue => {
  Vue.component(VueTreeList.name, VueTreeList)
}

export default VueTreeList
export { Tree, TreeNode, VueTreeList }

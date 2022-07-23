import './style.css'
import typescriptLogo from './typescript.svg'
import Navigo from 'navigo'
import HomePage from './pages/Home'
import AddProductPage from './pages/Admin/Product/add'
import EditProductPage from './pages/Admin/Product/edit'
import AdminPage from './pages/Admin/adminPage'

const router = new Navigo('/', {linksSelector: "a"})

export type ComponentBase = {
  render: () => Promise<string>;
  afterRender?: () => void
}

const print = async (component: ComponentBase, params?: any) => {
  document.getElementById('app').innerHTML = await component.render()
  if(component.afterRender) {
    component.afterRender()
  }
}

router.on({
  "/": () => {
    print(HomePage)
  },
  "/admin": () => {
    print(AdminPage)
  },
  "/admin/products/add": () => {
    print(AddProductPage)
  },
  '/admin/product/edit/:id': (data: any) => {
    const id = +data.data.id
    print(EditProductPage, id)
  },
})
router.resolve()
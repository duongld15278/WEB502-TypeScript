import AdminHeader from "../../../components/Header/Admin"
import Sidebar from "../../../components/Sidebar"

const EditProductPage = {
    render: async () => {
        return /*html*/`
        ${AdminHeader.render()}
        <div class="flex divide-x h-screen">
            <div class="w-[250px] flex-none mt-4 ml-5">
                ${Sidebar.render()}
            </div>
            <div class="w-full bg-gradient-to-r from-gray-100">
                <div class="px-5 pt-5 h-screen"> 
                    <h2 class="text-2xl font-medium mb-5">Sửa sản phẩm</h2>
                    <div class="flex justify-evenly">
                        <div class="bg-white w-2/5 h-fit mr-10 rounded border-b-2 border-b-gray-200">
                            <div class="flex flex-col justify-center items-center h-[250px] rounded border-b-2 border-b-gray-200">
                                <img id="preview-image" class="w-full overflow-hidden"/>
                                <label htmlFor="">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                                        clip-rule="evenodd" />
                                    </svg>
                                    <input id="input-file" type="file" class="hidden" accept="image/jpg, image/jpeg, image/png" />
                                </label>
                                <div class="mt-4">Thêm ảnh</div>
                                
                            </div>
                            <label for="" class="m-2">Mô tả ngắn</label>
                            <textarea id="shortDescription" class="w-full p-2"></textarea>
                        </div>
                        <div class=" w-3/5 col-span-2">
                            <h2 class="text-xl border-b-2 leading-loose	">Thông tin sản phẩm</h2>
                            <div class="flex flex-col mt-4 ">
                                <label for="">Tên sản phẩm:</label>
                                <input id="name" type="text" placeholder="Tên sản phẩm" class="w-full border rounded-md px-2 h-10">
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-4">
                            <div class="flex flex-col ">
                                <label for="">Giá gốc:</label>
                                <input id="originalPrice" type="text" placeholder="Giá gốc" class="w-full border rounded-md px-2 h-10">
                            </div>
                            <div class="flex flex-col ">
                                <label for="">Giá khuyến mãi:</label>
                                <input id="saleOffPrice" type="text" placeholder="Giá khuyến mãi" class="w-full border rounded-md px-2 h-10">
                            </div>
                            <div class="flex flex-col ">
                                <label for="">Danh mục:</label>
                                <select name="" id="category" class="w-full border rounded-md px-2 h-10">
                                    <option value="1">Iphone</option>
                                    <option value="2">Xaomie</option>
                                    <option value="3">Samsung</option>
                                </select>
                            </div> <br>
                            </div>
                            <div class="">
                                <label for="">Đặc điểm nổi bật:</label>
                                <textarea id="feature" class="w-full border rounded-md px-2 h-20"></textarea>
                            </div> <br>
                            <div class="">
                                <label for="">Mô tả dài:</label>
                                <textarea id="description" class="w-full border rounded-md px-2 h-20"></textarea>
                            </div>
                            
                            <button class="border rounded-md text-white bg-[#00B0D7] w-[120px] h-[60px] mt-5" id="add-product-btn">Thêm mới</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        `
    }
}

export default EditProductPage;
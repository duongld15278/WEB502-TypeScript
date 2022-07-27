const signin = {
    render: async () => {
        return /*html*/`
            <div class=" bg-gray-300 h-screen flex justify-center items-center">
                <div class="register w-[800px] h-[500px] flex justify-between">
                    <div class="left-side bg-white w-2/3 px-10 flex items-center">
                        <div class="w-[410px]">
                            <h1 class="text-center text-2xl font-bold mb-2">Đăng ký</h1>
                            <div>
                                <label for="email" class="text-xl font-semibold">Email</label><br>
                                <input type="email" id="email" name="email" class="w-full h-12 border-2 border-[#C7C7C7] p-2">
                            </div>

                            <div>
                                <label for="password" class="font-medium">password</label><br>
                                <input type="password" id="password" name="password" class="w-full h-12 border-2 border-[#C7C7C7] p-2">
                            </div>
                            
                            <button type="submit" class="w-full h-12 text-white text-center bg-[#FF424E] mt-2">Đăng nhập</button>

                            <div class="social text-center mt-10">
                                <a href="/signup" class="text-blue-400">Đăng ký</a> | <span>Hoặc đăng nhập bằng</span>
                                <div class="mx-auto w-32 flex justify-between mt-5">
                                    <a href="">
                                        <img src="/images/face.png" alt="" class="w-14">
                                    </a>
                                    <a href="" >
                                        <img src="/images/google.png" alt="" class="w-14">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right-side bg-gray-200 w-1/3 px-14 flex items-center">
                        <img src="./public/images/18b60c3920a439c87e40d88a0fee7deb.png" class="mt-20" alt="">
                    </div>
                </div>
            </div>
        `;
    }
}
export default signin;
import Image from "next/image";

export default function Home() {
  const amount = 5

  return (
    <div>
      <h1 className="text-7xl font-normal font-montserrat text-center">Serving <b>Hearts</b> <br /> Building <b>Lives</b></h1>


      {/* Vision & Mission */}
      <div className="visionMission border border-black mt-[15%] w-3/4 block mx-auto rounded-lg mb-[8%]">
        <div className="text-center block mx-auto py-10 px-24">
          <h1 className="text-5xl mb-4">Mission</h1>
          <p className="text-2xl">GIA Kalibanteng, we are devoted to transforming lives through the unwearing love of Christ. Guided by our commitment to faith, compassion, and community.</p>

          <div className="w-[65%] h-px bg-black block mx-auto my-10"></div>

          <h1 className="text-5xl mb-4">Vision</h1>
          <p className="text-2xl">GIA Kalibanteng, we are devoted to transforming lives through the unwearing love of Christ. Guided by our commitment to faith, compassion, and community.</p>
        </div>
      </div>

      {/* Warta & Berita jemaat */}
      <div className="bg-yellow-500 p-10 px-24">
        <h1 className="font-bold text-6xl text-white mb-10">Warta & Berita Jemaat</h1>
        <div className="cardLayer flex space-x-6 overflow-x-auto w-max">
          <div className="cardLayer overflow-x-auto flex space-x-6 mb-3">
            {Array.from({ length: amount }, (_, index) => (
              <div key={index} className="card bg-base-100 w-96 shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Kata Pengantar Pendeta */}
      <div className="grid grid-cols-2 p-24 px-14 bg-white">
        <div>
          <img className="" src="https://i.ytimg.com/vi/rEMsjeq43_U/maxresdefault.jpg" alt="" />
        </div>
        <div className="pl-11">
          <div className="grid grid-rows-2">
            <div>
              <h1 className="text-center text-4xl uppercase mb-5">Shalom</h1>
              <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ab incidunt rem id quod iste quae voluptatum non molestiae consequuntur cumque sit laboriosam rerum delectus asperiores accusantium error odio. Totam corporis sapiente a, cum hic ipsam placeat ducimus quos tenetur, consequuntur porro amet itaque ut?</p>
            </div>
            <div>
              <div className="grid grid-cols-3">
                <div>
                  <div className="h-px w-[50%] bg-black"></div>
                </div>
                <div>
                  <h1>Widhi Laksana - Pastor</h1>
                </div>
                <div>
                  <div className="h-px w-[50%] bg-black"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

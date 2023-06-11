import AdDetailView from "./adDetailView/page";
import Banner from "./components/Banner";
import Card from "./components/Card";
import {MdOutlineKeyboardArrowRight} from "react-icons/md"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <>
        <Banner />
      <section className="w-full h-full  flex m-14  max-lg:m-4">
       <aside className="w-1/2 max-lg:hidden lg:block">
        <div className="flex flex-col p-4 gap-2">
         <h3 className="font-extrabold">Marcas</h3>
         <div className="flex flex-col gap-0 text-gray-500 p-2">
           <span>General Motors</span>
           <span>Fiat</span><span>Ford</span>
           <span>Honda</span>
           <span>Porsche</span>
           <span>Volkswagen</span>
         </div>
        </div>

        <div className="flex flex-col p-4 gap-2">
          <h3 className="font-extrabold">Modelos</h3>
         <div className="flex flex-col gap-0 text-gray-500 p-2">
           <span>Civic</span>
           <span>Corolla</span>
           <span>Cruze</span>
           <span>Fit</span>
           <span>Gol</span>
           <span>Ka</span>
           <span>Onix</span>
           <span>Porsche</span>
          </div>
        </div>
        <div className="flex flex-col p-4 gap-2">
          <h3 className="font-extrabold">Cor</h3>
         <div className="flex flex-col gap-0 text-gray-500 p-2">
           <span>Azul</span>
           <span>Branco</span>
           <span>Cinza</span>
           <span>Prata</span>
           <span>Verde</span>
          </div>
       </div>

        <div className="flex flex-col p-4 gap-2">
          <h3 className="font-extrabold">Ano</h3>
         <div className="flex flex-col gap-0 text-gray-500 p-2">
           <span>2022</span>
           <span>2021</span>
           <span>2015</span>
           <span>2013</span>
           <span>2012</span>
           <span>2010</span>
         </div>
        </div>

        <div className="flex flex-col p-4 gap-2">
         <h3 className="font-extrabold">Combustivel</h3>
          <div className="flex flex-col gap-0 text-gray-500 p-2">
           <span>Diesel</span>
           <span>Etanol</span>
           <span>Gasolia</span>
           <span>Flex</span>
         </div>
        </div>


        <div className="flex flex-col p-4 gap-2">
         <h3 className="font-extrabold">Combustivel</h3>
          <div className="flex  gap-6 text-gray-500 p-2">
            <input className="w-28 outline-slate-300 text-center  bg-slate-300 " type="text" placeholder="Miníma"/>
            <input className="w-28 outline-slate-300 text-center  bg-slate-300 " type="text" placeholder="Máxima"/>

          </div>
        </div>

        <div className="flex flex-col p-4 gap-2">
         <h3 className="font-extrabold">Preço</h3>
          <div className="flex  gap-6 text-gray-500 p-2">
            <input className="w-28 outline-slate-300 text-center  bg-slate-300 " type="text" placeholder="Miníma"/>
            <input className="w-28 outline-slate-300 text-center  bg-slate-300 " type="text" placeholder="Máxima"/>
          </div>
        </div>

      </aside>
      
      <Card />
      
        </section>

        <div className="w-full flex justify-center items-center lg:hidden ">
          <button className="flex btn-primary relative top-0 left-0 items-center">Filtros</button>
        </div>
        <div className="flex w-full h-48 items-center justify-center gap-4">
          <div className="flex gap-2">
            <p className="text-xl text-gray-500">1 </p>
            <p className="text-xl text-gray-400"> de 2</p>
          </div>
          <button className="text-brand-1 font-bold flex items-center justify-center">Seguinte <MdOutlineKeyboardArrowRight className="text-xl"/> </button>
        </div>
        
      </>
    </main>
  );
}

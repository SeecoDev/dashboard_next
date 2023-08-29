import Link from "next/link";

  const menuRoutes = [
    {
        ruta: '/',
        nombre: 'Inicio'
    },
    {
        ruta: '/about',
        nombre: 'Acerca de'
    },
    {
      ruta:'/form',
      nombre: 'Form'
    }
]


function Menu(){
    return (
      <div className="w-[15%] bg-[#2176FF] h-screen text-white text-left pt-8 pl-4 pb-4 flex-col justify-between">
        <h1 className="text-4xl">Menu</h1>
        <ol className="pt-4 text-lg">
          {
            menuRoutes.map((menu, index) =>(
            <li key={index}>
             <Link href={menu.ruta}>{menu.nombre}</Link>   
            </li>
          ))
          }
        </ol>
      </div>
    );
  }
  
  export default Menu;
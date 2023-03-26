import { useState } from 'react';

import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as Cog } from './assets/cog.svg';
import { ReactComponent as Document } from './assets/document.svg';
import { ReactComponent as People } from './assets/people.svg';
import { ReactComponent as Tablet } from './assets/tablet.svg';
import { ReactComponent as Clip } from './assets/clip.svg';
import { ReactComponent as ProfilePicture } from './assets/profile-picture.svg';
import { ReactComponent as Filter } from './assets/filter.svg';
import { ReactComponent as Search } from './assets/search.svg';



function App() {
  const [ showMenu, setShowMenu ] = useState(true);

  function menu() {
    if (showMenu === false) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  return (
    <div className='font-["Inter"] bg-[#7C3AED] h-screen flex'>
      <div className=' flex flex-col gap-[60px] pr-7'>
        <nav className={showMenu ? 'flex flex-col bg-[#7C3AED] gap-9 fixed top-0 left-0 pl-2 sm:pl-[35px] pt-8 w-[50px] sm:w-[120px] h-full overflow-hidden transition-all text-transparent' : 'flex flex-col gap-9 fixed top-0 left-0 pl-2 sm:pl-[35px] pt-8 w-[110px] sm:w-[180px] text-[#CAB3FF] h-full overflow-hidden transition-all text-transparent bg-[#7C3AED]'}>
          <i onClick={menu}><Logo className='cursor-pointer w-[30px] sm:w-[50px]'/></i>
          <ul className='h-full flex flex-col gap-8 pl-1 sm:pl-4'>
            <li className={showMenu ? 'w-[175px] flex gap-2 sm:gap-4 items-center font-bold text-xs sm:text-base cursor-pointer fill-[#CAB3FF] hover:fill-white transition-all' : 'w-[175px] flex gap-2 sm:gap-4 items-center font-bold text-xs sm:text-base hover:text-white cursor-pointer fill-[#CAB3FF] hover:fill-white transition-all'}>
              <Tablet />
              <p className={showMenu ? '' : 'text-[#CAB3FF] hover:text-white'}>Boards</p>
            </li>
            
            <li className={showMenu ? 'w-[175px] flex gap-2 sm:gap-4 items-center font-bold text-xs sm:text-base cursor-pointer fill-[#CAB3FF] hover:fill-white transition-all' : 'w-[175px] flex gap-2 sm:gap-4 items-center font-bold text-xs sm:text-base hover:text-white cursor-pointer fill-[#CAB3FF] hover:fill-white transition-all'}>
              <People />
              <p className={showMenu ? '' : 'text-[#CAB3FF] hover:text-white'}>Equipes</p>
            </li>
            
            <li className={showMenu ? 'w-[175px] flex gap-2 sm:gap-4 items-center font-bold text-xs sm:text-base cursor-pointer fill-[#CAB3FF] hover:fill-white transition-all' : 'w-[175px] flex gap-2 sm:gap-4 items-center font-bold text-xs sm:text-base hover:text-white cursor-pointer fill-[#CAB3FF] hover:fill-white transition-all'}>
              <Document />
              <p className={showMenu ? '' : 'text-[#CAB3FF] hover:text-white'}>Relatórios</p>
            </li>
            
            <li className={showMenu ? 'w-[175px] flex gap-2 sm:gap-4 items-center font-bold text-xs sm:text-base cursor-pointer fill-[#CAB3FF] hover:fill-white transition-all' : 'w-[175px] flex gap-2 sm:gap-4 items-center font-bold text-xs sm:text-base hover:text-white cursor-pointer fill-[#CAB3FF] hover:fill-white transition-all'}>
              <Cog />
              <p className={showMenu ? '' : 'text-[#CAB3FF] hover:text-white'}>Ajustes</p>
            </li>
          </ul>
        </nav>
      </div>

      <div className={showMenu ? 'bg-[#FBFAFF] flex flex-col gap-6 sm:gap-8 rounded-tl-3xl pt-12 pb-1 px-2 sm:px-8 mt-1 absolute left-[50px] sm:left-[95px] right-0 transition-all' : 'bg-[#FBFAFF] flex flex-col gap-6 sm:gap-8 rounded-tl-3xl pt-12 pb-1 px-2 sm:px-8 mt-1 absolute left-[110px] sm:left-[180px] right-0 transition-all'}>
        <header className='flex items-center justify-between sm:px-6'>
          <div className='flex gap-3 items-center'>
            <h1 className='font-bold text-xl sm:text-3xl'>Meu Kanban</h1>
            <Clip className='w-[18px] sm:w-[24px]'/>
          </div>
          <ProfilePicture className='w-[40px] sm:w-[64px]'/>
        </header>
        <section className='sm:px-6 flex flex-col sm:flex-row gap-2 sm:gap-4'>
          <button className='bg-[#7C3AED] hover:bg-[#612bbf] flex items-center justify-center gap-2 sm:px-8 sm:py-3 px-2 py-1 rounded-md'>
            <Filter className='w-[16px] sm:w-[24px]'/>
            <p className='text-white text-sm'>Filtrar</p>
          </button>
          <form className='flex gap-1 sm:gap-2 items-center w-full bg-white border-[#E3E3E3] border-2 rounded-lg px-2 py-1 sm:px-6 sm:py-3'>
            <Search className='w-[16px] sm:w-[24px]'/>
            <input type="text" placeholder='Busque por cards, assuntos ou responsáveis...' className='text-[10px] sm:text-base w-full outline-none' />
          </form>
        </section>
        <section>
          <div className='sm:px-6 flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between'>
            <div className='flex flex-col gap-2 sm:gap-6'>
              <h2 className='text-lg sm:text-xl font-bold'>A fazer</h2>

              <div className='flex flex-col gap-2 sm:gap-6'>
                <div className='bg-white rounded-lg px-2 py-2 sm:px-6 sm:py-6 sm:w-[320px]  flex flex-col gap-2 shadow-[3px_4px_26px_0_rgba(0,0,0,0.25)]'>
                  <h3 className='text-xs sm:text-sm font-bold'>#boraCodar um Kanban 🧑‍💻</h3>
                  <p className='text-[#756966] text-xs sm:text-sm font-medium'>Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.</p>
                  <div className='flex gap-2'>
                    <p className='bg-[#E2D6FF] px-1 sm:px-2 sm:py-1 rounded-lg text-[#7C3AED] text-xs font-medium'>rocketseat</p>
                    <p className='bg-[#E2D6FF] px-1 sm:px-2 sm:py-1 rounded-lg text-[#7C3AED] text-xs font-medium'>desafio</p>
                  </div>
                </div>
                
                <div className='bg-white rounded-lg px-2 py-2 sm:px-6 sm:py-6 sm:w-[320px]  flex flex-col gap-2 shadow-[3px_4px_26px_0_rgba(0,0,0,0.25)]'>
                  <h3 className='text-xs sm:text-sm font-bold'>#boraCodar um Kanban 🧑‍💻</h3>
                  <p className='text-[#756966] text-xs sm:text-sm font-medium'>Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.</p>
                  <div className='flex gap-2'>
                    <p className='bg-[#E2D6FF] px-1 sm:px-2 sm:py-1 rounded-lg text-[#7C3AED] text-xs font-medium'>rocketseat</p>
                    <p className='bg-[#E2D6FF] px-1 sm:px-2 sm:py-1 rounded-lg text-[#7C3AED] text-xs font-medium'>desafio</p>
                  </div>
                </div>
                <div className='bg-white rounded-lg px-2 py-2 sm:px-6 sm:py-6 sm:w-[320px]  flex flex-col gap-2 shadow-[3px_4px_26px_0_rgba(0,0,0,0.25)]'>
                  <h3 className='text-xs sm:text-sm font-bold'>#boraCodar um Kanban 🧑‍💻</h3>
                  <p className='text-[#756966] text-xs sm:text-sm font-medium'>Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.</p>
                  <div className='flex gap-2'>
                    <p className='bg-[#E2D6FF] px-1 sm:px-2 sm:py-1 rounded-lg text-[#7C3AED] text-xs font-medium'>rocketseat</p>
                    <p className='bg-[#E2D6FF] px-1 sm:px-2 sm:py-1 rounded-lg text-[#7C3AED] text-xs font-medium'>desafio</p>
                  </div>
                </div>
                <div className='bg-white rounded-lg px-2 py-2 sm:px-6 sm:py-6 sm:w-[320px]  flex flex-col gap-2 shadow-[3px_4px_26px_0_rgba(0,0,0,0.25)]'>
                  <h3 className='text-xs sm:text-sm font-bold'>#boraCodar um Kanban 🧑‍💻</h3>
                  <p className='text-[#756966] text-xs sm:text-sm font-medium'>Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.</p>
                  <div className='flex gap-2'>
                    <p className='bg-[#E2D6FF] px-1 sm:px-2 sm:py-1 rounded-lg text-[#7C3AED] text-xs font-medium'>rocketseat</p>
                    <p className='bg-[#E2D6FF] px-1 sm:px-2 sm:py-1 rounded-lg text-[#7C3AED] text-xs font-medium'>desafio</p>
                  </div>
                </div>
                <div className='bg-white rounded-lg px-2 py-2 sm:px-6 sm:py-6 sm:w-[320px]  flex flex-col gap-2 shadow-[3px_4px_26px_0_rgba(0,0,0,0.25)]'>
                  <h3 className='text-xs sm:text-sm font-bold'>#boraCodar um Kanban 🧑‍💻</h3>
                  <p className='text-[#756966] text-xs sm:text-sm font-medium'>Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.</p>
                  <div className='flex gap-2'>
                    <p className='bg-[#E2D6FF] px-1 sm:px-2 sm:py-1 rounded-lg text-[#7C3AED] text-xs font-medium'>rocketseat</p>
                    <p className='bg-[#E2D6FF] px-1 sm:px-2 sm:py-1 rounded-lg text-[#7C3AED] text-xs font-medium'>desafio</p>
                  </div>
                </div>
                <div className='bg-white rounded-lg px-2 py-2 sm:px-6 sm:py-6 sm:w-[320px]  flex flex-col gap-2 shadow-[3px_4px_26px_0_rgba(0,0,0,0.25)]'>
                  <h3 className='text-xs sm:text-sm font-bold'>#boraCodar um Kanban 🧑‍💻</h3>
                  <p className='text-[#756966] text-xs sm:text-sm font-medium'>Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.</p>
                  <div className='flex gap-2'>
                    <p className='bg-[#E2D6FF] px-1 sm:px-2 sm:py-1 rounded-lg text-[#7C3AED] text-xs font-medium'>rocketseat</p>
                    <p className='bg-[#E2D6FF] px-1 sm:px-2 sm:py-1 rounded-lg text-[#7C3AED] text-xs font-medium'>desafio</p>
                  </div>
                </div>
                <div className='bg-white rounded-lg px-2 py-2 sm:px-6 sm:py-6 sm:w-[320px]  flex flex-col gap-2 shadow-[3px_4px_26px_0_rgba(0,0,0,0.25)]'>
                  <h3 className='text-xs sm:text-sm font-bold'>#boraCodar um Kanban 🧑‍💻</h3>
                  <p className='text-[#756966] text-xs sm:text-sm font-medium'>Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.</p>
                  <div className='flex gap-2'>
                    <p className='bg-[#E2D6FF] px-1 sm:px-2 sm:py-1 rounded-lg text-[#7C3AED] text-xs font-medium'>rocketseat</p>
                    <p className='bg-[#E2D6FF] px-1 sm:px-2 sm:py-1 rounded-lg text-[#7C3AED] text-xs font-medium'>desafio</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className='flex flex-col gap-2 sm:gap-6'>
              <h2 className='text-lg sm:text-xl font-bold'>Fazendo</h2>

              <div className='flex flex-col gap-2 sm:gap-6'>
                <div className='bg-white rounded-lg px-2 py-2 sm:px-6 sm:py-6 sm:w-[320px]  flex flex-col gap-2 shadow-[3px_4px_26px_0_rgba(0,0,0,0.25)]'>
                  <h3 className='text-xs sm:text-sm font-bold'>Conferir o novo desafio 🚀</h3>
                  <p className='text-[#756966] text-xs sm:text-sm font-medium'>Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível</p>
                  <div className='flex gap-2'>
                    <p className='bg-[#E2D6FF] px-1 sm:px-2 sm:py-1 rounded-lg text-[#7C3AED] text-xs font-medium'>rocketseat</p>
                    <p className='bg-[#E2D6FF] px-1 sm:px-2 sm:py-1 rounded-lg text-[#7C3AED] text-xs font-medium'>desafio</p>
                  </div>
                </div>
                
                <div className='bg-white rounded-lg px-2 py-2 sm:px-6 sm:py-6 sm:w-[320px]  flex flex-col gap-2 shadow-[3px_4px_26px_0_rgba(0,0,0,0.25)]'>
                  <h3 className='text-xs sm:text-sm font-bold'>Ser incrível 😎</h3>
                  <p className='text-[#756966] text-xs sm:text-sm font-medium'>Sempre me lembrar de manter minha autenticidade e espalhar amor</p>
                  <div className='flex gap-2'>
                    <p className='bg-[#E2D6FF] px-1 sm:px-2 sm:py-1 rounded-lg text-[#7C3AED] text-xs font-medium'>autocuidado</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className='flex flex-col gap-2 sm:gap-6'>
              <h2 className='text-lg sm:text-xl font-bold'>Feito</h2>

              <div className='flex flex-col gap-2 sm:gap-6'>
                <div className='bg-white rounded-lg px-2 py-2 sm:px-6 sm:py-6 sm:w-[320px]  flex flex-col gap-2 shadow-[3px_4px_26px_0_rgba(0,0,0,0.25)]'>
                  <h3 className='text-xs sm:text-sm font-bold'>#boraCodar uma página de login 🧑‍💻</h3>
                  <p className='text-[#756966] text-xs sm:text-sm font-medium'>Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.</p>
                  <div className='flex gap-2'>
                    <p className='bg-[#E2D6FF] px-1 sm:px-2 sm:py-1 rounded-lg text-[#7C3AED] text-xs font-medium'>rocketseat</p>
                    <p className='bg-[#E2D6FF] px-1 sm:px-2 sm:py-1 rounded-lg text-[#7C3AED] text-xs font-medium'>desafio</p>
                  </div>
                </div>
                
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App


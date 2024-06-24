"use client"
import RootAdminLogin from '@/rootadminmodals/RootAdminLogin'
import { title } from 'process'

function RootAdminLoginModal() {
  return (
    <>
      <div className='top-0 left-0 w-full h-full flex items-center justify-center bg-pink-500 bg-opacity-60'></div>
      <div className='w-full sm:w-[450px] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'>
        <div className='relative w-full h-full mx-auto flex items-center justify-center'>
          <div className='bg-white rounded-lg shadow relative w-full bg-gradient-to-b from-brand-orange to-slate-900 mx-6'>
            <div className="modal-content overflow-y-auto max-h-[80vh]">
              <div className='flex justify-end p-2'>
                <button
                  type='button'
                  className='bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white text-white'
                >
                  X
                </button>
              </div>
              <RootAdminLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default RootAdminLoginModal



export const Button = ({children}) => {
  return (
    <button 
        className='rounded px-4 py-1 text-sm font-semibold text-white bg-green-600 w-full hover:bg-green-900 mt-2'
    >
        {children}
    </button>
  )
}

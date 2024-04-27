

export const Container = ({children}) => {
  return (
    <div className='h-[calc(100vh-4rem)] flex items-center justify-center'>
        {children}
    </div>
  )
}

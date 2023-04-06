import Link from 'next/link'

const Footer = () => {
  return (
    <footer >
      <div className='flex justify-center my-8 text-red-600'>Copyright &copy; {new Date().getFullYear()} &nbsp;   
       HCNtoMoon
      </div>
    </footer>
  )
}

export default Footer

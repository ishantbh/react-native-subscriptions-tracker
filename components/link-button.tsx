import { Link, type LinkProps } from 'expo-router'

type LinkButtonProps = {
  type?: 'default' | 'secondary'
} & LinkProps

export function LinkButton({
  type = 'default',
  href,
  children,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`mt-4 max-w-fit self-center px-4 py-2 font-semibold rounded hover:bg-blue-500 focus-visible:bg-blue-500 transition-colors ${type === 'secondary' ? 'text-blue-400 border border-blue-400 hover:text-white focus-visible:text-white' : type === 'default' ? 'bg-blue-400 text-white' : ''}`}
    >
      {children}
    </Link>
  )
}

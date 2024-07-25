import Image from 'next/image'
import { Container } from './container'
import Link from 'next/link'
import { Button, Input } from '../ui'
import { ShoppingCart, User, Search } from 'lucide-react'

export const Header = () => {
  return (
    <header className="w-full py-[45px]">
      <Container className="flex items-center justify-between">
        <Link
          href={'/'}
          className="flex items-center gap-[15px]"
        >
          <Image
            src={'/logo.png'}
            alt="Logo Pizza"
            width={35}
            height={35}
          />
          <div className="flex flex-col">
            <h2 className="text-[24px] uppercase font-black leading-none">
              Next Pizza
            </h2>
            <span className="inline-block text-[#7b7b7b] leading-none whitespace-nowrap">
              вкусней уже некуда
            </span>
          </div>
        </Link>
        <div className="relative shrink w-[765px]">
          <Search
            className="absolute left-[20px] top-[50%] translate-y-[-50%]"
            size={16}
            color="#adadad"
          />
          <Input
            className="w-full py-[14px] px-[46px] bg-[#F9F9F9] border-none"
            placeholder="Поиск пиццы..."
          />
        </div>
        <div className="flex gap-[15px]">
          <Button
            className="flex gap-[5px] font-semibold text-[16px]"
            variant={'outline'}
          >
            <User size={16} />
            Войти
          </Button>
          <Button variant={'outline'}>
            <ShoppingCart size={16} />
          </Button>
        </div>
      </Container>
    </header>
  )
}

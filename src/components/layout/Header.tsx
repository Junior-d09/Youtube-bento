'use client'

import { Menu, Bell, Video, User } from 'lucide-react'
import { SearchBar } from '../ui/SearchBar'
import { IconButton } from '../ui/IconButton'
import { Avatar } from '../ui/Avatar'

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  const handleSearch = (query: string) => {
    console.log('Recherche:', query)
    // Logique de recherche ici
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center gap-4 px-4">
        {/* Logo & Menu */}
        <div className="flex items-center gap-4">
          <IconButton
            icon={Menu}
            label="Menu"
            variant="ghost"
            onClick={onMenuClick}
          />
          <div className="flex items-center gap-1">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
              <Video className="text-white" size={20} />
            </div>
            <span className="hidden text-xl font-bold text-foreground md:block">
              YTBento
            </span>
          </div>
        </div>

        {/* Barre de recherche */}
        <div className="flex flex-1 justify-center">
          <SearchBar 
            placeholder="Rechercher" 
            onSearch={handleSearch}
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <IconButton
            icon={Video}
            label="Créer"
            variant="ghost"
            className="hidden md:flex"
          />
          <IconButton
            icon={Bell}
            label="Notifications"
            variant="ghost"
            badge={3}
          />
          <button className="ml-2">
            <Avatar
              src="https://picsum.photos/seed/user/80/80"
              alt="Utilisateur"
              size="md"
            />
          </button>
        </div>
      </div>
    </header>
  )
}
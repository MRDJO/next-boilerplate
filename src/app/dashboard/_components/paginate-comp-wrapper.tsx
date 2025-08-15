'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useDebounce } from 'use-debounce';
import { Check, X } from 'lucide-react';
import { useRouter } from '@bprogress/next/app';
import { Input } from '@/components/ui/input';
import PaginationControls from '@/components/data-table/pagination-controls';


interface PaginateCompWrapperProps{
  currentPage: number;
  itemsPerPage: number;
  totalItems: number,
  table: React.ReactNode,
  stats: React.ReactNode,
  statusFilter?: boolean,
  additionnalFilters?: React.ReactNode
}

export default function PaginateCompWrapper({ 
  currentPage, 
  itemsPerPage ,
  totalItems,
  table,
  statusFilter,
  stats,
  additionnalFilters
}: PaginateCompWrapperProps) {
  const router = useRouter();
  const [paginateLoading, setPaginateLoading] = useState(false); 
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [text, setText] = useState('');
  const [value] = useDebounce(text, 1000);
  const [status, setStatus] = useState('all');

  useEffect(() => {
    setPaginateLoading(false);
  }, [searchParams]);

  const handlePageChange = (newPage: number) => {
    setPaginateLoading(true)
    const searchP = new URLSearchParams(searchParams.toString());
    searchP.set('page', newPage.toString());
    router.push(`${pathname}?${searchP.toString()}`);
    setPaginateLoading(false)
  };

  useEffect(() => {
    const searchP = new URLSearchParams(searchParams.toString());
    searchP.set('status', status);
    searchP.set('page', '1');
    router.push(`${pathname}?${searchP.toString()}`);
  }, [status]);

  useEffect(() => {
    const searchPa = new URLSearchParams(searchParams.toString());

    if (value.trim()) {
      searchPa.set('search', value.trim());
    } else {
      searchPa.delete('search');
    }
    searchPa.set('page', '1');
    router.push(`${pathname}?${searchPa.toString()}`);
  }, [value]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);



  const onItemPerPageChange =  (newItemsPerPage: number) => {
    setPaginateLoading(true);
    const seaParams = new URLSearchParams(searchParams.toString());
    seaParams.set("itemsPerPage", newItemsPerPage.toString());
    router.push(`${pathname}?${seaParams.toString()}`);
    setPaginateLoading(false);
  };


  return (
    <div>
        {stats}
        <div className='flex items-center gap-2'>
          <Input defaultValue={text} placeholder="Rechercher par nom" onChange={(e)=>setText(e.target.value)} />
          {statusFilter && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">État:</span>
              {[
              { key: 'all', label: 'Tous', icon: null },
              { key: 'active', label: 'Actif', icon: Check },
              { key: 'inactive', label: 'Inactif', icon: X }
            ].map(item => {
              const Icon = item.icon;
              return (
                <button
                  key={item.key}
                  onClick={() => setStatus(item.key)}
                  className={`flex cursor-pointer items-center gap-1.5 px-3 py-1.5 rounded-xs text-xs font-medium border transition-all duration-200 ${
                    status === item.key
                      ? item.key === 'active' 
                        ? 'bg-green-100 text-green-700 border-green-300' 
                        : item.key === 'inactive' 
                        ? 'bg-red-100 text-red-700 border-red-300' 
                        : 'bg-blue-100 text-blue-700 border-blue-300' 
                      : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50' 
                  }`} 
                >
                  {Icon && <Icon className="h-3 w-3" />}
                  {item.label}
                </button>
              );
            })}
          </div>)}
          {additionnalFilters}
        </div>
        {table}
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          loading={paginateLoading}
          onPageChange={handlePageChange}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onItemPerPageChange={onItemPerPageChange}
        />
    </div>
  );
}
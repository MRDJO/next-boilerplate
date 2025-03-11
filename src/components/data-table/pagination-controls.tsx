import React from 'react';
import { Button } from '../ui/button';

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  loading: boolean
}

export default function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,loading
}: PaginationControlsProps) {
  return (
    <div className="flex justify-between"  >
        <div className="py-4"  >
            <span className="px-4 py-2 text-sm">
                Page {currentPage} sur {totalPages}
            </span>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
            <Button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage <= 1 || loading}
              loading={loading}
              variant="outline"
            >
                Précédent
            </Button>
            
            <Button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage >= totalPages || loading}
              loading={loading}
              variant="outline"
            >
                Suivant
            </Button>
            </div>
    </div>
    
  );
}
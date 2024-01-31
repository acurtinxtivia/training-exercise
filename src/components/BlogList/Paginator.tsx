import ChevronLeftIcon from "../icons/ChevronLeftIcon"
import ChevronRightIcon from "../icons/ChevronRightIcon"

interface PaginatorProps {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    onClickPageChange: (newPage: number) => void;
}

const Paginator = ({ currentPage, itemsPerPage, totalItems, onClickPageChange }: PaginatorProps) => {
    return (
        <div className="w-full flex justify-center items-center gap-10 mt-[30px]">
            {(currentPage > 1) && (
                <button onClick={() => onClickPageChange(currentPage - 1)} className="flex items-center text-light-gray hover:text-primary transition-all">
                    <ChevronLeftIcon className="h-4 w-4" strokeWidth={2} />
                    <span>
                        prev page
                    </span>
                </button>
            )}
            {(currentPage * itemsPerPage < totalItems) && (
                <button onClick={() => onClickPageChange(currentPage + 1)} className="flex items-center text-light-gray hover:text-primary transition-all">
                    <span>
                        next page
                    </span>
                    <ChevronRightIcon className="h-4 w-4" strokeWidth={2} />
                </button>
            )}
        </div>
    )
}

export default Paginator

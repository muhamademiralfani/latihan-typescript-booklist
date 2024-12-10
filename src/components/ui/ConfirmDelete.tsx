import Swal from 'sweetalert2';

const confirmDelete = (onConfirm) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            onConfirm(); // Panggil fungsi yang diberikan untuk menghapus data
            Swal.fire(
                'Deleted!',
                'Your data has been deleted.',
                'success'
            );
        }
    });
};

export default confirmDelete;
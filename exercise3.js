var nama= 'erry'
var peran= 'penyihir'


if (nama===''){
    console.log('nama harus diisi')
} else if (nama!=='' && peran==='') {
    console.log('Halo '+nama+', Pilih peranmu unuk memulai game!')
}else if (nama!=='' && peran==='ksatria') {
    console.log('Selamat datang di Dunia Proxytia, '+nama)
    console.log('halo '+peran+' '+nama+', kamu dapat menyerang dengan senjatamu')
} else if ( nama!=='' && peran==='tabib') {
    console.log('Selamat datang di Dunia Proxytia, '+nama)
    console.log('halo '+peran+' '+nama+', kamu akan membantu temanmu yang terluka.')
} else if (nama!=='' && peran==='penyihir') {
    console.log('Selamat datang di Dunia Proxytia, '+nama)
    console.log('halo '+peran+' '+nama+', ciptakan keajaiban yang membantu kemenanganmu!')
} 
import React from 'react'
import { useState, useEffect } from 'react'
import styles from "../../../styles/Home.module.css";
import Link from 'next/dist/client/link';
import axios from 'axios'
import { useRouter } from 'next/router'

function CreatePinjam() {
    const [data, setData] = useState([])
    const [messge, setMessge] = useState('')
    const [pegawai, setPegawai] = useState('')
    const [tanggal, setTanggal] = useState('')
    const [status, setStatus] = useState('')
    const router = useRouter()

    const getAllInventaris = () => {
        axios.get('http://localhost:5000/inventaris')
            .then(res => {
                setData(res.data)
                console.log(res.data)
            }
            )
            .catch(err => {
                console.log(err)
            }
            )
    }
    useEffect(() => {
        getAllInventaris()
    }
        , [])

    async function AddPinjamNew(e) {
        e.preventDefault()
        try {
            axios.post('http://localhost:5000/inventaris/pinjam', {
                kode: e.target.kode.value,
                pegawai: e.target.pegawai.value,
                tanggal: e.target.tanggal.value,
                status: e.target.status.value
            })
                .then(res => {
                    setMessge(res.data.message)
                    getAllInventaris()
                    router.push('/admin/formulir')
                }
                )
                .catch(err => {
                    setMessge(err.message)
                }
                )
        }
        catch (err) {
            setMessge(err.message)
        }
    }

    async function deletePinjam (kode){
        try{
            const res = await axios.delete(`http://localhost:5000/inventaris/pinjam/${kode}`)
            console.log(res)
            if(res.data.message){
                setMessge(res.data.message)
            }
            alert(`Data kode barang ${kode} berhasil dihapus`)
        }
        catch(err){
            console.log(err)
        }
        router.push('/admin/AddPinjam')
    }
    return (
        <div>
            <div className={styles.contentcontainer}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Kode</th>
                            <th>Pegawai</th>
                            <th>Tanggal</th>
                            <th>Status</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.kode}</td>
                                    {item.pinjam.map((item, index) => <td key={index}>{item.pegawai}</td>)}
                                    {item.pinjam.map((item, index) => <td key={index}>{item.tanggal}</td>)}
                                    {item.pinjam.map((item, index) => <td key={index}>{item.status}</td>)}
                                    <td>
                                        <button className="btn btn-primary"><Link href={`/admin/EditPinjam?id=${item._id}&kode=${item.kode}&pegawai=${item.pegawai}&tanggal=${item.tanggal}&status=${item.status}`}>Edit</Link></button>
                                        
                                    </td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </table>
                <div className="card">
                    <div className="card-header">
                        <h3>Create Pinjam</h3>
                    </div>

                    <div className="card-body">
                        <form onSubmit={AddPinjamNew}>
                            <div className="form-group">
                                <label>Kode</label>
                                <select className="form-control" name="kode" id="kode">
                                    {data.map(item => {
                                        return (
                                            <option key={item.kode} value={item.kode}>{item.kode}</option>
                                        )
                                    }
                                    )}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Pegawai</label>
                                <select name="" id="" value={pegawai}
                                    onChange={(e) => setPegawai(e.target.value)} className="form-control">
                                    <option value="">Pilih Pegawai</option>
                                    <option value="pegawai_1">Pegawai 1</option>
                                    <option value="pegawai_2">Pegawai 2</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Tanggal</label>
                                <input type="date" className="form-control" name="tanggal" id="tanggal" value={tanggal} onChange={(e) => setTanggal(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Status</label>
                                <select name="" id="" value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    className="form-control">
                                    <option value="">Pilih Status</option>
                                    <option
                                        value="Dipinjam"
                                    >Dipinjam</option>
                                    <option
                                        value="Dikembalikan"
                                    >Dikembalikan</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        <p>{messge}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePinjam

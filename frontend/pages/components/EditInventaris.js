import React from 'react'
import { useState, useEffect } from 'react'
import styles from "../../styles/Home.module.css";
import {useParams} from 'react-router-dom'
import axios from 'axios'

function EditInventari() {
    const [data, setData] = useState([])
    const [kode, setKode] = useState('')
    const [nama, setNama] = useState('')
    const [merk, setMerk] = useState('')
    const [jumlah, setJumlah] = useState('')
    const [foto, setFoto] = useState('')
    const [keterangan, setKeterangan] = useState('')
    const {id} = useParams()

    const getInventariByKode = () => {
        axios.get(`http://localhost:5000/inventaris/${id}`)
            .then(res => {
                setData(res.data)
                setKode(res.data.kode)
                setNama(res.data.nama)
                setMerk(res.data.merk)
                setJumlah(res.data.jumlah)
                setFoto(res.data.foto)
                setKeterangan(res.data.keterangan)
            }
            )
            .catch(err => {
                console.log(err)
            }
            )
    }
    useEffect(() => {
        getInventariByKode()
    }
    , [])

    const Edit = () => {
        const data = {
            kode: kode,
            nama: nama,
            merk: merk,
            jumlah: jumlah,
            foto: foto,
            keterangan: keterangan
        }
        axios.put('http://localhost:5000/inventaris/', data)
            .then(res => {
                console.log(res)
                alert('Data berhasil ditambahkan')
            }
            )
            .catch(err => {
                console.log(err)
            }
            )
        
    }
    

    return (
        <div>
            <div className={styles.contentcontainer}>
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Edit Data Inventaris</h4>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Kode Barang</label>
                                <input type="text" className="form-control" value={kode} onChange={(e) => setKode(e.target.value)} />

                            </div>
                            <div className="form-group">
                                <label>Nama Barang</label>
                                <input type="text" className="form-control" value={nama} onChange={(e) => setNama(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Merk Barang</label>
                                <input type="text" className="form-control" value={merk} onChange={(e) => setMerk(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Jumlah Barang</label>
                                <input type="text" className="form-control" value={jumlah} onChange={(e) => setJumlah(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Foto Barang</label>
                                <input type="file" className="form-control" value={foto} onChange={(e) => setFoto(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Keterangan Barang</label>
                                <input type="text" className="form-control" value={keterangan} onChange={(e) => setKeterangan(e.target.value)} />
                            </div>
                            <button type="button" className="btn btn-primary" onClick={Edit}>Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditInventari

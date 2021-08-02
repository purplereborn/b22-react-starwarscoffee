import '../App.css'
import React, { Component } from 'react'

import Footer from '../components/Footer'
import { connect } from 'react-redux'

import { getHistory } from '../redux/actions/transaction'
import { Link } from 'react-router-dom'



class HistoryDelete extends Component {

    componentDidMount() {
        this.props.getHistory()
    }

    render() {
        const {data} = this.props.items
        return (


    <div className="bgDelete">

    <div className="text-white  font-bold text-4xl  pt-28 text-center ">Let’s see what you have bought! <br/>
        <span className="text-lg font-normal "> Select item to delete </span>

    </div>

    <div className="font-bold text-white kanan">Delete</div>

    <div classNameName="grid grid-cols-4  justify-between gap-4 pl-32 pr-32">
        {data.map(items => {
        return(

            <div classNameName=" bg-white rounded-2xl " key={items.id}>
                
                <div classNameName="flex flex-row space-x-5  mr-10 ml-6 mt-6">
                    
                    <div classNameName="w-16 h-16 bg-yellow-900 rounded-full pr-3"></div>
                    <div classNameName="flex flex-col">
                        <div classNameName="font-bold text-xl">{items.name}</div>
                        <div>IDR.{items.price.toLocaleString('en')}</div>
                        <div>Delivered</div>

                        <div classNameName="absolute pl-24 pt-10">
                            <label className="inline-flex items-center mt-3">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-yellow-600" />
                            <span className="ml-2 text-gray-700"></span>
                            </label>
                        </div>
                    </div>
                    
                </div>
            </div>

        )

        })}





        </div>
        

    
    <Footer />

        <div className="modal w-full flex justify-center">

        <div className="modal-box mt-96 bg-white rounded-xl">
            <div className="text-center text-3xl text-modal ml-auto mr-auto pt-16 pb-16">Are you sure want to delete the selected items?</div>
            <div className="flex flex-row justify-between pr-16 pl-16">
                
                <Link to="/history"><button className="bg-white border-yellow-900 border-2 text-yellow-900 rounded-2xl btnDelete font-bold hover:border-yellow-400 hover:text-yellow-400">Cancel</button></Link>

                <Link to="/history">
                <button className="bg-yellow-900 text-white rounded-2xl btnDelete font-bold hover:bg-yellow-400 ">Delete</button></Link>
            </div>
        </div>

    </div>

    </div>

)
}
}

const mapStateToProps = state => ({
    items: state.items
})

const mapDispatchToProps = {getHistory}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryDelete)
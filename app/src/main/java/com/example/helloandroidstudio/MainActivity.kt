package com.example.helloandroidstudio

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        miFuncion()
    }

   /*
    * Esto es un comentario que podre utilizar para trabajar
    */

    private fun miFuncion (){

        //Esta es una variable
        var saludo = "---------- Estoy en la terminal"
        print(saludo)
    }


}
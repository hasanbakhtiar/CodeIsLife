// 1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
// 2.Dəyişkən adlarını yazarkən İngilis əlifbasından başqa əlifadan istifadə etmək qadağandır.
// 3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
// 4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
// 5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdə sonra istifadə edə bilərik.
// 6.Dəyişkən adları böyük kiçik hərfləri anlayır.
// 7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
// 8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.
// 9.Eyni dəyişkən adını dəişkən ifadələrində istifadə etmək qadağandır.

// abstract 	    arguments	    await*	            boolean
// break	        byte	        case	            catch
// char	            class*	        const	            continue
// debugger	        default	        delete	            do
// double	        else	        enum*	            eval
// export*	        extends*	    false	            final
// finally	        float	        for	                function
// goto	            if	            implements	        import*
// in	            instanceof	    int	                interface
// let*	            long	        native	            new
// null	            package	        private	            protected
// public	        return	        short	            static
// super*	        switch	        synchronized	    this
// throw	        throws	        transient	        true
// try	            typeof	        var	                void
// volatile	        while	        with	            yield

// var      -> variable (global)
// const    -> constant (local)
// let      -> let      (local)

// const a = 5;
// console.log(a);

// global

// if (true) {
//   // local global
//   if (true) {
//     // local
//     var a = 5;
// }
// console.log(a);
// }

// ========================================================================================

// if       -> eger
// else     -> deyilse
// else if  -> deyilse eger

// if (5 < 10) {
//   console.log("duzdu");
// } else if (20 < 100) {
//   console.log("duzdu1");
// } else {
//   console.log("sehvdir");
// }


// const myTime = 9;


// if ((myTime >= 5) && (myTime < 12)) {
//     console.log('Good morning');
//     if (myTime == 7) {
//         console.log('Get up');
//     }else if(myTime == 9){
//         console.log('have breakfast');
//     }else if(myTime == 10){
//         console.log('go to school');
//     }
// }else if((myTime >= 12) && (myTime <= 19)){
//     console.log('Good afternoon');
    
// }else if((myTime >= 20) && (myTime <= 22)){
//     console.log('Good evening');

// }else if(myTime == 23){
//     console.log("Good night");
// }else{
//     console.log('wrong time');
// }



// ========================================================================================

// const info = "a";

// switch (info) {
//     case "a":
//         console.log('bu a-dir');
//         break;
//     case 10:
//         console.log('bu 10dur');
//         break;
//     default:
//         console.log('her biri uygun deyil');
//         break;
// }


// ========================================================================================


// try {

//     throw "her sey eladir";
    
//     consolasdasdea.log("Hello");

// } catch (err) {
//     // console.log("Burada bir sevh var");
//     console.log(err);
// }finally{
//     console.log("Men daima ishleyirem");
// }
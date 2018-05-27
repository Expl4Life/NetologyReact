function highlightedBlock(Component) {

   return class extends React.Component {

      render() {
         let views = this.props.views;

         if (views > 1000) {
            return (
               <Popular>
                  <Component {...this.props}/>
               </Popular>
            )
         } else if (views < 100) {
            return (
               <New>
                  <Component {...this.props}/>
               </New>
            );
         }

         return (
            <Component {...this.props}/>
         );
      }
   };
}
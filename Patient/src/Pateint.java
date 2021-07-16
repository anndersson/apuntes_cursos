public class Pateint extends User{

    //PROPIEDADES DE LA CLASE

    private String birthday;
    private double weight; //peso
    private double height;
    private String blood; //sangre

    Pateint (String name, String email){
        super(name,email);
    }

    public void setWeight(double weight){
        this.weight = weight;
    }
    public String getWeigth(){
        return this.weight + " Kg.";
    }

}

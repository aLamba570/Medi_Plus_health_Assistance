package com.example.medi_plus_covid_tracker;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.ListView;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.example.medi_plus_covid_tracker.Adapter.Adapter;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    ListView listView;

    public static List<Model> modelList = new ArrayList<>();
    Model model;
    Adapter adapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        listView = findViewById(R.id.listView);
        fetchData();
    }

    private void fetchData() {
        String url = "https://api.covid19india.org/state_district_wise.json";

        StringRequest request = new StringRequest(Request.Method.GET, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {

                try {
                    // Creating JSON Object
                    JSONObject object = new JSONObject(response);

                    // Loop through states
                    for (Iterator<String> states = object.keys(); states.hasNext(); ) {
                        String stateName = states.next();
                        JSONObject stateData = object.getJSONObject(stateName);
                        JSONObject districtData = stateData.getJSONObject("districtData");

                        // Loop through districts within the state
                        for (Iterator<String> districts = districtData.keys(); districts.hasNext(); ) {
                            String districtName = districts.next();
                            JSONObject district = districtData.getJSONObject(districtName);
                            JSONObject deltaData = district.getJSONObject("delta");

                            String active = district.getString("active");
                            String confirmed = district.getString("confirmed");
                            String deceased = district.getString("deceased");
                            String recovered = district.getString("recovered");

                            String confInc = deltaData.getString("confirmed");
                            String confDec = deltaData.getString("deceased");
                            String confRec = deltaData.getString("recovered");

                            model = new Model(districtName, confirmed, deceased, recovered, active, confInc, confDec, confRec);
                            // Add the model to the list
                            modelList.add(model);
                        }
                    }

                    adapter = new Adapter(MainActivity.this, modelList);
                    listView.setAdapter(adapter);

                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Toast.makeText(MainActivity.this, error.getMessage(), Toast.LENGTH_SHORT).show();
            }
        });

        RequestQueue requestQueue = Volley.newRequestQueue(this);
        requestQueue.add(request);
    }
}